

export const onNameChange = (event) => {
    return {
        type: "NAME_CHANGE", nameValue: event.target.value,
       
    }
}

export const onAgeChange = (event) => {
    return {
        type: "AGE_CHANGE", ageValue: event.target.value
    }
}

export const onPlaceChange = (event) => {
    return {
        type: "PLACE_CHANGE", placeValue: event.target.value
    }
}

export const onFeedbackChange = (event) => {
    return {
        type: "FEEDBACK_CHANGE", feedValue: event.target.value
    }
}

export const onZipChange = (event) => {
    return {
        type: "ZIP_CHANGE", zipValue: event.target.value
    }
}

export const onGenderChange = (event) => {
    return {
        type: "GENDER_CHANGE", GenderValue: event.target.value
    }
}




export const clearAll = () => {
    return {
        type: "CLEAR_ALL"
    }
}

export const openModal=()=> {
    
    return {
        type: "ON_OPEN", 
    }

}



export const closeModal=()=> {
    
    return {
        type: "ON_CLOSE", 
    }
}