import Attribute from "../models/Attribute.js";

export const getAttributes = async (req, res) => {
  try {
    const attributes = await Attribute.find();
    res.status(200).json(attributes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy danh sách thuộc tính", error });
  }
};

export const getAttributeById = async (req, res) => {
  try {
    const attribute = await Attribute.findById(req.params.id);
    if (!attribute)
      return res.status(404).json({ message: "Không tìm thấy thuộc tính" });
    res.status(200).json(attribute);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thuộc tính", error });
  }
};

export const createAttribute = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name)
      return res.status(400).json({ message: "Tên thuộc tính là bắt buộc" });

    const existingAttribute = await Attribute.findOne({ name });
    if (existingAttribute)
      return res.status(400).json({ message: "Thuộc tính đã tồn tại" });

    const newAttribute = new Attribute({ name });
    await newAttribute.save();

    res.status(201).json(newAttribute);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi tạo thuộc tính", error });
  }
};

export const updateAttribute = async (req, res) => {
  try {
    const { name } = req.body;
    const attribute = await Attribute.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true },
    );

    if (!attribute)
      return res.status(404).json({ message: "Không tìm thấy thuộc tính" });

    res.status(200).json(attribute);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật thuộc tính", error });
  }
};

export const deleteAttribute = async (req, res) => {
  try {
    const attribute = await Attribute.findByIdAndDelete(req.params.id);
    if (!attribute)
      return res.status(404).json({ message: "Không tìm thấy thuộc tính" });

    res.status(200).json({ message: "Xóa thuộc tính thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa thuộc tính", error });
  }
};
