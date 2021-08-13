import mongoose from 'mongoose'
const Schema = mongoose.Schema



const activitySchema = new Schema({
  name: {type: String},
  location: {type: String},
  address: {type: String},
  notes: {type: String},
  cost: {type: Number},
  budgetCategory: {type: String, enum: ['travel', 'lodging', 'food', 'activities', 'misc']},
  date: {type: Date},
  attendees: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  isKeyActivity: {type: Boolean},
}, {
  timeStamps: true
})

const Activity = mongoose.model('Activity', activitySchema)

export {
  Activity
}