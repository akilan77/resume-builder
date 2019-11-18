import React,{useState} from "react";
import {Homenav,Navicon,Nav1,Iconname,Nav2,Signin,Signedin,Signicon,Signname,Signclick,Signedclick,Signout,Invalid,Username,Password,Inputname,Inputbox1,Inputbox2,Loginbutton,Createaccount,Create} from "../styles";
import '../fonts/css/font-awesome.css';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";


export default function Navbar (){
const [login,setlogin] = useState(false); 
const [error,seterror]=useState(false);
const [loginvalue,setloginvalue]=useState({username:'',password:''});
const [clicked,setclicked]=useState(false);
const dispatch = useDispatch();
const valid = useSelector( state => state);


const clear=()=>{
    seterror(false);
}

const username=(e)=>{
    let value=e.target.value;
    if(value.length>5)
     setloginvalue({...loginvalue,username:value});
}

const password=(e)=>{
    let str=e.target.value;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let special=/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if(str.length>7){
        let c1=false;
        let c2=false;
        let c3=false;
        if(str.match(upperCaseLetters)){c1=true}
        if(str.match(numbers)){c2=true}
        if(str.match(special)){c3=true}
        if(c1 && c2 && c3)
            setloginvalue({...loginvalue,password:str});
        else
            setloginvalue({...loginvalue,password:''});
    }
}

const submit = () =>{
    let username = loginvalue.username;
    let password = loginvalue.password;
    if(username.length && password.length){
        let value =[{username:loginvalue.username,password:loginvalue.password,email:''}];
        dispatch({text:value,type:"login"});
        if(valid.user.length==0){
            seterror('Invalid username or password');
        }
        else{
            setlogin(false);
            seterror('  ');
        }
    }
    else{
        seterror('Invalid username or password');
    }
}

const click = () =>{
    setlogin(!login);
}

const click2 = () =>{
    setclicked(!clicked);
}

const logout=()=>{
    dispatch({type:"logout"});
    setclicked(false);
}

return(
            <Homenav>
                <Link to="/"><Nav1>
                    <Navicon><i class="fa fa-file-text-o" aria-hidden="true"/></Navicon>
                    <Iconname>Resume Builder</Iconname>
                </Nav1></Link>
                <Nav2>
                     {valid.user.length==0 && <Signin onClick={click}><Signicon><i class="fa fa-user-o" aria-hidden="true"></i></Signicon><Signname>Sign in</Signname></Signin>}
                     {valid.user.length!=0 && <Signedin onClick={click2}><Signicon><i class="fa fa-user" aria-hidden="true"></i></Signicon><Signname>{loginvalue.username}</Signname></Signedin> }
                </Nav2>
                {login && <Signclick>
                    <Username><Inputname>Username</Inputname><Inputbox1 onBlur={username} onFocus={clear}/></Username>
                    <Password><Inputname>Password</Inputname><Inputbox2 onBlur={password} onFocus={clear}/></Password>
                     {error.length!=0 && <Invalid>{error}</Invalid>}
                    <Loginbutton onClick={submit}>Sign in</Loginbutton>
                    <Createaccount>don't have account?<Link to="/create"><Create>create account</Create></Link></Createaccount>
                    </Signclick>
                    }
                {clicked && <Signedclick>
                    <Signout onClick={logout}><i class="fa fa-sign-out" aria-hidden="true"></i>logout</Signout>
                </Signedclick>

                }
                
                
            </Homenav>   
);
}