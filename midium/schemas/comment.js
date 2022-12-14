export default {
    name: "comment",
    type: "document",
    title:"comment",
    fields:[
        {
            name:"name",
            type:"string",
        },
        {
            title:"Approved",
            name:"approved",
            type:"boolean",
            description:"O Comentário não irá aparecer sem uma aprovação prévia"
        },
        {
            name:"email",
            type:"string"
        },
        {
            name:"comment",
            type:"text"
        },
        {
            name:"post",
            type:"reference",
            to:[{type: "post"}]
        }
    ]
}