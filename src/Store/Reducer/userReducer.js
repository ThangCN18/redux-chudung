
//giá trị khởi tạo của user

const userInitial = {
    email: "",
    name: ""
}

//function reducer kiểm tra các action mình truyền vào để set lại user

// dispatch({type: "LOGIN", user: {
//     email: "dung@gmail.com",
//     name: "Chú Dung"
// }})

//reducer

export default function userReducer(state = userInitial, action) {
    switch (action.type) {
        case "LOGIN": {
            return state = action.user
        }
        case "LOGOUT": {
            return state = userInitial
        }
        default:
            return state
    }
}