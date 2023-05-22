module.exports.generateCrudMethods = Model => {
    return{
        getall: () => Model.find(),
        getByid: id => Model.findById(id),
        create: record => Model.create(record),
        update: (id, record) => Model.findByIdAndUpdate(id, record, { new:true }),
        delete: id => Model.findByIdAndDelete(id)
    }
}