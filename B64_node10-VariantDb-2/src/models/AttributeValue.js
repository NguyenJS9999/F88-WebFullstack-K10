import mongoose from "mongoose";

const attributeValueSchema = new mongoose.Schema(
  {
    attributeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attribute",
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const AttributeValue = mongoose.model("AttributeValue", attributeValueSchema);
export default AttributeValue;
