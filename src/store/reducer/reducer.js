const initialState = {
    userName: "asd",
    age:"30",
    Place:"Mumbai",
    gender:"MALE",
    Feedback:"test",
    zip:"asd",
    modalIsOpen:false
}


const reducer = (state = initialState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case "NAME_CHANGE":
            return Object.assign({}, newState, { userName: action.nameValue })
            
        case "AGE_CHANGE":
            return Object.assign({}, newState, { age: action.ageValue })    
        
        case "PLACE_CHANGE":
            return Object.assign({}, newState, { Place: action.placeValue })     

        case "FEEDBACK_CHANGE":
            return Object.assign({}, newState, { Feedback: action.feedValue })
          
        case "ZIP_CHANGE":
            return Object.assign({}, newState, { zip: action.zipValue })
        
        case "GENDER_CHANGE":
            return Object.assign({}, newState, { gender: action.GenderValue })
                  

        case "ON_OPEN":
            return Object.assign({}, newState, { modalIsOpen: true  })
    
        case "ON_CLOSE":
            return Object.assign({}, newState, { modalIsOpen: false })
            
        case "CLEAR_ALL":
            return Object.assign({}, newState, { userName: "",
            age:"",
            Feedback:"",
            zip:"",
            modalIsOpen:false })        
            

        default:  
        return newState;  
    }
   
}


export default reducer;