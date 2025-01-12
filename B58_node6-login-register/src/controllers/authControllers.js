import User from '../models/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcryptjs';

/**
 * Bước 1: Kiểm tra email đã đăng ký chưa
 * Bước 2: Mã hoá mật khẩu: bcrypt, bcryptjs
 * Bước 3: Lưu thông tin đăng ký vào database.
 * Bước 4: Thông báo thành công
 *
 * Lưu ý:
 * - Nếu đăng ký mà cho phép người dùng đăng nhập luôn thì cần tạo token và đưa vào cookie hoặc trả token cho người dùng.
 * - Nếu muốn xác thực email, thì gửi email (nodemailer) cho người dùng để kích hoạt.
 *
 * 	 */
export const register = async (req, res) => {
	try {
		const { email, password } = req.body;
		const exitEmail = await exitEmail.findOne({ email: email });

		console.log('findOne exitEmail: ', exitEmail);

		if (exitEmail) {
			res.status(400).json({
				message: 'email này đã được sử dụng yêu cầu đăng ký'
			});
		} else {
			console.log('nguoi dung chưa tồn tại');
			const hashPassword = await bcrypt.hash(password, 10);

			console.log('Tao hashPassword: ', hashPassword);

			const user = await User.create({
				...res.body,
				password: hashPassword,
				role: role || 'member'
			});

			user.password = undefined;
			await user.save();
			res.status(201).json({
				message: 'Tạo tài khoản thành công',
				user: user
			});
		}
	} catch (error) {}
};

/**
 * Bước 1: Kiểm tra user đã đăng ký chưa?
 * Bước 2: Từ email đã find được user, compare password.
 * Bước 3: Sign JWT (cài đặt jwt)
 * Bước 4: Sử dụng 1 trong các phương thức được học để duy trì trạng thái đăng nhập cho người dùng.
 * Bước 5: Thông báo.
 */

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(400)
				.json({ message: 'Email chưa được đăng ký.' });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ message: 'Sai mật khẩu.' });
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: '1d'
		});
		console.log('token: ', token);

		res.cookie('token', token, { httpOnly: true });
		res.status(200).json({ message: 'Đăng nhập thành công!', token });
	} catch (error) {
		console.error('Lỗi đăng nhập:', error);
		res.status(500).json({
			message: 'Đã xảy ra lỗi. Vui lòng thử lại sau.'
		});
	}
};
