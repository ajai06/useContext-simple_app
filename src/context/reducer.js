
export const initialState = {
    role: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CEO":
            return {
                role: action.payload
            }
        case "HR":
            return {
                role: action.payload
            }
        case "DEVELOPER":
            return {
                role: action.payload
            }
        case "ADMIN":
            return {
                role: action.payload
            }
        case "LOGOUT":
            return {
                role : ""
            }      
        default:
            return initialState;
    }

}