export const tempUser={
    fullname:"John Doe",
    email:"john.doe@gmail.com",
    portfolio:"Project Owner",
    phone:"09876543",
    company:"John Doe Corporation",
    skills:['Flutter','ReactJS', 'Python'],
    image:"",
    shortTag:"Senior Software Engineer",
    decription:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,`
}
const initState={
    isLoading:false,
    isLoggedIn:true,
    currentUser:tempUser,
    expandMenu:true
}

const rootReducer = (state= initState,action)=>{
    switch(action.type){
        case 'isLoading':
            return {
                isLoading:true,
                currentUser:state.currentUser,
                isLoggedIn:state.isLoggedIn,
                expandMenu:state.expandMenu
            }
        case 'stopLoading':
            return {
                isLoading:false,
                currentUser:state.currentUser,
                isLoggedIn:state.isLoggedIn,
                expandMenu:state.expandMenu
            }
        case 'loggedIn':
            return {
                isLoading:false,
                currentUser:action.user,
                isLoggedIn:true,
                expandMenu:state.expandMenu
            }
        case 'loggedOut':
            return {
                isLoading:false,
                currentUser:{},
                isLoggedIn:false,
                expandMenu:state.expandMenu
            }
        case 'expandMenu':
            console.log(state.expandMenu)
            return {
                isLoading:state.isLoading,
                currentUser:state.currentUser,
                isLoggedIn:state.isLoggedIn,
                expandMenu:!state.expandMenu
            }
        default:
            return state
    }
}

export default rootReducer;