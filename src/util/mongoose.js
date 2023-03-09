module.exports = {
    mogoosesToObjects(mongoooses) {
        return mongoooses.map(mongooose => mongooose.toObject());
    },
    mongooseToObject(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}