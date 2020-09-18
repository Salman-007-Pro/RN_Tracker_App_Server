const mongoose = require("mongoose");

const pointSchema = mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    speed: Number,
    heading: Number,
    accuracy: Number,
  },
});
const trackSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
  },
  locations: [pointSchema],
});
mongoose.model("Track", trackSchema);
