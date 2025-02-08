import AttributeValue from "../models/AttributeValue.js";
import Attribute from "../models/Attribute.js";

export const getAttributeValues = async (req, res) => {
  try {
    const attributeValues = await AttributeValue.find().populate(
      "attributeId",
      "name",
    );
    res.status(200).json(attributeValues);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy danh sách giá trị thuộc tính", error });
  }
};

export const getAttributeValueById = async (req, res) => {
  try {
    const attributeValue = await AttributeValue.findById(
      req.params.id,
    ).populate("attributeId", "name");
    if (!attributeValue)
      return res
        .status(404)
        .json({ message: "Không tìm thấy giá trị thuộc tính" });

    res.status(200).json(attributeValue);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy giá trị thuộc tính", error });
  }
};

export const createAttributeValue = async (req, res) => {
  try {
    const { attributeId, value } = req.body;
    if (!attributeId || !value)
      return res.status(400).json({ message: "Thiếu attributeId hoặc value" });

    // Kiểm tra xem attributeId có tồn tại không
    const attribute = await Attribute.findById(attributeId);
    if (!attribute)
      return res.status(404).json({ message: "Thuộc tính không tồn tại" });

    const newAttributeValue = new AttributeValue({ attributeId, value });
    await newAttributeValue.save();

    res.status(201).json(newAttributeValue);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi tạo giá trị thuộc tính", error });
  }
};

export const updateAttributeValue = async (req, res) => {
  try {
    const { value } = req.body;
    const attributeValue = await AttributeValue.findByIdAndUpdate(
      req.params.id,
      { value },
      { new: true },
    ).populate("attributeId", "name");

    if (!attributeValue)
      return res
        .status(404)
        .json({ message: "Không tìm thấy giá trị thuộc tính" });

    res.status(200).json(attributeValue);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi cập nhật giá trị thuộc tính", error });
  }
};

export const deleteAttributeValue = async (req, res) => {
  try {
    const attributeValue = await AttributeValue.findByIdAndDelete(
      req.params.id,
    );
    if (!attributeValue)
      return res
        .status(404)
        .json({ message: "Không tìm thấy giá trị thuộc tính" });

    res.status(200).json({ message: "Xóa giá trị thuộc tính thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa giá trị thuộc tính", error });
  }
};
