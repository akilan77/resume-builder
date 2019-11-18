import styled from "styled-components";

 export const Homewrapper=styled.div`
 width:100%;
 height:750px;
 left:0;
 top:0;
 position:absolute;
 `;

 export const Homenav=styled.div`
 height:70px;
 background-color:#2E5894;
 border:1px solid #2E5894;
 `;

 export const Nav1=styled.div`
 margin-left:50px;
 margin-top:7px;
 `;

 export const Iconname=styled.div`
 font-size:120%;
 font-weight:bold;
 color:white;
 margin-left:50px;
 margin-top:15px;
 font-family:"Comic Sans MS", cursive, sans-serif;
 position:absolute;
 `;

 export const Navicon= styled.div`
 font-size:300%;
 color:white;
 position:absolute;
 `;

 export const Nav2=styled.div`
 postion:absolute;
 margin-left:1080px;
 `;

 export const Signin=styled.button`
 margin-top:5px;
 margin-left:10px;
 border:1.5px solid white;
 font-family:"Comic Sans MS", cursive, sans-serif;
 position:absolute;
 height:45px;
 width:120px;
 outline:none;
 color:white;
 font-size:130%;
 background-color:#2E5894;
 :hover{
    transform:scale(1.05);
}
 `;

 export const Signedin=styled.button`
 margin-top:5px;
 margin-left:10px;
 font-family:"Comic Sans MS", cursive, sans-serif;
 position:absolute;
 height:45px;
 outline:none;
 color:white;
 font-size:150%;
 border:none;
 background-color:#2E5894;
 :hover{
    transform:scale(1.05);
}
 `;

 export const Signname=styled.div`
 margin-top:-14px;
 position:absolute;
 margin-left:28px;
 `;

 export const Signicon=styled.div`
 position:absolute;
 margin-top:-14px;
 margin-left:6px;
 `;

 export const Signclick=styled.div`
 position:absolute;
 margin-left:985px;
 height:410px;
 width:321px;
 margin-top:65px;
 border:1.5px solid black;
 background-color:white;
 z-index:3;
 `;

 export const Signedclick=styled.div`
 position:absolute;
 margin-left:1090px;
 height:50px;
 width:150px;
 margin-top:65px;
 border:1.5px solid black;
 background-color:white;
 z-index:3;
 `;

 export const Signout=styled.button`
 margin-top:5px;
 margin-left:5px;
 width:140px;
 height:40px;
 font-size:140%;
 background-color:white;
 border:none;
 outline:none;
 font-family:"Comic Sans MS", cursive, sans-serif;
 `;

 export const Username=styled.div`
 margin-top:50px;
 margin-left:12px;
 `;

 export const Password=styled.div`
 margin-top:35px;
 margin-left:12px;
 `;

 export const Inputname=styled.div`
 font-family:"Comic Sans MS", cursive, sans-serif;
 font-size:120%;
 `;
 
 export const Inputbox1=styled.input.attrs(()=>({
     type:'text',
 }))`
 width:285px;
 height:45px;
 border:1.5px solid black;
 font-size:130%;
 padding-left:10px;
 font-family:"Comic Sans MS", cursive, sans-serif;
 `; 

 export const Inputbox2=styled.input.attrs(()=>({
    type:'password',
}))`
width:285px;
height:45px;
font-size:130%;
padding-left:10px;
font-family:"Comic Sans MS", cursive, sans-serif;
border:1.5px solid black;
`; 

 export const Loginbutton=styled.button`
 margin-top:50px;
 width:220px;
 margin-left:55px;
 height:50px;
 background-color:tomato;
 border:none;
 color:black;
 font-size:120%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 border-radius:4px;
 outline:none;
 :hover{
    background-color:Mediumseagreen;
 }
 `;

 export const Createaccount=styled.div`
  margin-top:30px;
  margin-left:15px;
  font-size:110%;
  font-family:"Comic Sans MS", cursive, sans-serif;
 `;

 export const Create=styled.span`
  margin-left:5px;
  color:red;
  text-decoration:underline;
  text-decoration-color:white;
 `;

 export const Instrwrapper=styled.div`
  width:1270px;
  margin-top:80px;
  height:420px;
  margin-left:30px;
  padding-top:10px;
 `;

 export const Instr1=styled.div`
 margin-left:20px;
 width:300px;
 height:300px;
 border:1.5px solid lightgray;
 border-radius:50%;
 position:absolute;
 `;

 export const Instr2=styled.div`
 border:1px solid lightgray;
 margin-left:322px;
 margin-top:150px;
 width:158px;
 position:absolute;
`;

export const Instr3=styled.div`
 margin-left:480px;
 width:300px;
 height:300px;
 border:1.5px solid lightgray;
 border-radius:50%;
 position:absolute;
 `;

 export const Instr4=styled.div`
 border:1px solid lightgray;
 margin-left:782px;
 margin-top:150px;
 width:167px;
 position:absolute;
`;

 export const Instr5=styled.div`
 margin-left:950px;
 width:300px;
 height:300px;
 border:1.5px solid lightgray;
 border-radius:50%;
 position:absolute;
 `;

 export const Icon=styled.div`
 font-size:1000%;
 margin-left:80px;
 margin-top:60px;
 color:Mediumseagreen;
 `;

 export const Instrvalue=styled.div`
 width:300px;
 height:100px;
 margin-top:330px;
 font-family:"Comic Sans MS", cursive, sans-serif;
 font-size:180%;
 text-align:center;
 `;
 
 export const Instrvalue1=styled(Instrvalue)`
  margin-left:30px;
  position:absolute;
 `;

 export const Instrvalue2=styled(Instrvalue)`
  margin-left:480px;
  position:absolute;
 `;

 export const Instrvalue3=styled(Instrvalue)`
  margin-left:950px;
  position:absolute;
 `;

 export const Build=styled.button`
  width:300px;
  height:80px;
  margin-top:60px;
  margin-left:520px;
  background-color:tomato;
  border:none;
  text-align:center;
  font-size:170%;
  font-family:"Comic Sans MS", cursive, sans-serif;
  :hover{
      transform:scale(1.05);
  }
 `;
 
 export const Invalid=styled.div`
 font-size:110%;
 color:red;
 font-family:"Comic Sans MS", cursive, sans-serif;
 position:absolute;
 margin-left:40px;
 margin-top:5px;
 `;

 export const Account_create=styled.div`
 margin-top:25px;
 font-size:130%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 margin-left:100px;
`;
export const Create_link=styled.div`
 color:SlateBlue;
 display:inline-block;
`;

export const Account_Wrapper=styled.div`
 width:100%;
 height:100%;
 left:0;
 top:0;
 position:absolute;
`;
export const Account_details=styled.div`
 width:70%;
 height:950px;
 margin-left:15%;
 background-color:Beige;
`;
export const Account_content=styled.div`
 width:65%
 height:80%;
 margin-left:20%;
 
`;
export const Account_name=styled.div`
  font-size:300%;
  font-family:"Comic Sans MS", cursive, sans-serif;  
  text-align:center;
  padding-top:30px;
`;

export const Account_Username=styled.div`
 font-size:120%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 margin-top:70px;
`;

export const Account_others=styled.div`
 font-size:120%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 margin-top:60px;
`;


export const Password_field=styled.input.attrs(()=>({
 type:'password',
 name:'password',
}))`
 padding-left:10px;
 width:550px;
 margin-top:10px;
 height:55px;
 font-size:150%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 border:1.5px solid black;
 border-radius:3px;
`;

export const Username_field=styled.input.attrs(()=>({
 type:'text',
 name:'display_name',
}))`
 padding-left:10px;
 width:550px;
 margin-top:10px;
 height:55px;
 font-size:150%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 border:1.5px solid black;
 border-radius:3px;
`;

export const ConfirmPassword_field=styled.input.attrs(()=>({
 type:'password',
 name:'confirm',
}))`
 padding-left:10px;
 width:550px;
 margin-top:10px;
 height:55px;
 font-size:150%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 border:1.5px solid black;
 border-radius:3px;
`;

export const Email_field=styled.input.attrs(()=>({
 type:'text',
 name:'email',
}))`
 padding-left:10px;
 width:550px;
 margin-top:10px;
 height:55px;
 font-size:150%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 border:1.5px solid black;
 border-radius:3px;
`;

export const Dp_wrapper=styled.div`
 margin-top:15px;
 margin-left:70px;
 height:300px;
 width:300px;
 border:1.5px solid black;
 background-color:white;
`;

export const Dp=styled.img`
 height:299px;
 width:298px;
 padding-left:1px;
`;

export const Create_button=styled.button`
 margin-left:100px;
 margin-top:70px;
 width:350px;
 height:55px;
 font-family:"Comic Sans MS", cursive, sans-serif;
 font-size:180%;
 padding-top:2px;
 background-color:tomato;
 color:white;
 outline:none;
 border:1.5px solid tomato;
 border-radius:5px;
 :hover{
     transform:scale(1.02);
 }
`;

export const Error=styled.div`
 width:400px;
 height:30px;
 margin-top:0px;
 margin-left:10px;
 color:red;
 font-family:"Comic Sans MS", cursive, sans-serif;
 font-size:120%;
 padding-top:5px;
 position:absolute;
`;
export const Login_error=styled.div`
 width:300px;
 color:red;
 margin-left:120px;
 font-size:120%;
 margin-top:5px;
 position:absolute;
 font-family:"Comic Sans MS", cursive, sans-serif;
`;
export const Resumewrapper=styled.div`
 height:100%
 width:100%;
 position:absolute;
 left:0;
 top:0;
`;
export const Resumedetails=styled.div`
 width:70%;
 position:absoute;
 border-right:1px solid lightgrey;
`;
export const Resumepreview=styled.div`
 height:100%;
 width:25%;
 position:absolute;
 left:70%;
 top:11.5%;
`;
export const Resumeheading=styled.div`
 font-size:200%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 margin-left:50px;
 margin-top:20px;
`;

export const Resumedetailswrapper=styled.div`
 margin-left:50px;
 margin-top:50px;
 width:800px;
 height:60px;
`;

 export const Resumetype=styled.div`
 font-size:130%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 font-weight:bold;
 `;

 export const Resumeinput=styled.input`
  margin-top:10px;
  height:50px;
  width:760px;
  outline:none;
  border:1.5px solid black;
  border-radius:5px;
  font-size:150%;
  padding-left:10px;
  font-family:"Comic Sans MS", cursive, sans-serif;
 `;


 export const Resumecontacts1=styled.input`
 margin-top:10px;
 height:50px;
 width:350px;
 outline:none;
 border:1.5px solid black;
 border-radius:5px;
 font-size:150%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 padding-left:10px;
 `;

 export const Resumecontacts2=styled.input`
 margin-top:10px;
 margin-left:50px;
 height:50px;
 width:350px;
 outline:none;
 border:1.5px solid black;
 border-radius:5px;
 font-size:150%;
 padding-left:10px;
 position:absolute;
 font-family:"Comic Sans MS", cursive, sans-serif;
 `;


 export const Resumedetailswrapper2=styled.div`
 margin-left:50px;
 margin-top:50px;
 width:800px;
 `; 

 export const Adder = styled.button`
  margin-left:705px;
  margin-top:-20px;
  font-size:130%;
  border:none;
  outline:none;
  position:absolute;
  background-color:white;
 `;

 export const Subtract = styled.button`
 margin-left:740px;
 font-size:130%;
 border:none;
 outline:none;
 position:absolute;
 background-color:white;
 margin-top:-20px;
 `;

 export const Projectname = styled.div`
 width:100%;
 margin-top:10px;
 `;

 export const Projectdetails1 = styled.div`
 margin-left:100px;
 margin-top:50px;
 font-size:130%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 font-weight:bold;
 `;

 export const Projectdetails2 = styled.div`
 margin-left:500px;
 margin-top:-30px;
 font-size:130%;
 position:absolute;
 font-family:"Comic Sans MS", cursive, sans-serif;
 font-weight:bold;
 `;
 
 export const Projectinput1=styled.input`
 margin-top:-40px;
 height:50px;
 width:350px;
 outline:none;
 border:1.5px solid black;
 border-radius:5px;
 font-size:150%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 padding-left:10px;
 position:absolute;
 margin-left:350px;
`;
 
 export const Projectinput2=styled.input`
 height:50px;
 width:350px;
 outline:none;
 border:1.5px solid black;
 border-radius:5px;
 font-size:150%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 padding-left:10px;
 position:absolute;
 margin-left:-50px;
 `;

 export const Projectinput3=styled.input`
 height:50px;
 width:350px;
 outline:none;
 border:1.5px solid black;
 border-radius:5px;
 font-size:150%;
 font-family:"Comic Sans MS", cursive, sans-serif;
 padding-left:10px;
 position:absolute;
 margin-left:350px;
 `;

 export const Projectwrapper=styled.div`
 margin-top:15px;
 height:50px;
 `;

 