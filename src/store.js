

import {createStore} from "redux";




const temp = [{username:'vishnu',password:'Vishnu123.',email:'vishnu2991997@gmail.com'}];

const account = ((state={account:temp,valid:false,user:''},action)=>{
    switch(action.type){
        case "add":
            {
                let len = state.account.length;
                console.log(len);
                state.account.push(action.text[0]);
                return state;
            }
        case "search":
            {
                let len =state.account.length;
                for(let i=0;i<len;i++)
                {
                    if(state.account[i].username==action.text[0].username){
                        state.valid=false;
                        return state;
                        
                    }
                }
                state.valid = true;
                return state;
            }
        case "login":
            {
                let len =state.account.length;
                for(let i=0;i<len;i++)
                {
                    if((state.account[i].username==action.text[0].username)&&(state.account[i].password==action.text[0].password)){
                        state.user=action.text[0].username;
                        return state;
                    }
                }
                state.user='';
                return state;
            }
        case "logout":
            {
                state.user='';
                return state;
            }
        default:
               return state;
    }
}
);  
const  store = createStore(account,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;