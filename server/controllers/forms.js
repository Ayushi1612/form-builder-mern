import FormQuestion from '../models/formQuestion.js'


export const getList = async (req, res)=>{

    try {
        const formList = await FormQuestion.find()
        // console.log(formList, "formList")
        res.status(200).json(formList)
    } catch (error) {
        res.status(404).json({message : error })
    }
}


export const createList = async (req, res)=>{
    const form = req.body
    // console.log(form,"form")
    const newForm = new FormQuestion(form)
    try {
        await newForm.save()
        res.status(201).json(newForm)
    } catch (error) {
        res.status(409).json({message: error})
    }

}