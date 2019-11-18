import React,{useState} from "react";
import {Resumewrapper,Resumedetails,Resumepreview,Resumeheading,Resumedetailswrapper,Resumetype,Resumeinput,Resumecontacts1,Resumecontacts2,Resumedetailswrapper2,Adder,Subtract,Projectname,Projectdetails1,Projectdetails2,Projectinput1,Projectinput2,Projectinput3,Projectwrapper} from '../styles'
import Navbar from './navbar'
export default function Resume1(){
    const [prof,setprof]=useState(1);
    const [skill,setskill]=useState(1);
    const [project,setproject]=useState(1);
    const [achievments,setachievments]=useState(1);
    const [array,setarray]=useState({name:'',profession:'',details11:'',details12:'',details21:'',details22:'',details31:'',details32:'',details41:'',details42:'',company:''});
    const [profarray,setprofarray]=useState([]);
    const [skillarray,setskillarray]=useState([]);
    const [projectarray,setprojectarray]=useState([]);
    const [achievmentsarray,setachievmentsarray]=useState([]);
    const profileadd = () =>{
        let count = prof;
            if((prof<4)&&(prof>0)){
                count++;
                setprof(count);
            }
        console.log(prof);
    }
    const profilesub = () =>{
        let count = prof;
        if((prof<=4)&&(prof>1)){
            count--;
            setprof(count);
        }
        console.log(prof);
    }
    const profile_return = () =>{
        let state=[];
        for(let i=0;i<prof;i++){
            state.push(
                 <Resumeinput onBlur={(e)=>{setprofarray([...profarray,profarray[i]=e.target.value])}}/>
            );
        }
        return state;
    }   
    const skilladd = () =>{
        let count = skill;
        console.log(profarray);
            if((count<4)&&(count>0)){
                count++;
                setskill(count);
            }
        console.log(skill);
    }
    const skillsub = () =>{
        let count = skill;
        if((count<=4)&&(count>1)){
            count--;
            setskill(count);
        }
        console.log(skill);
    }
    const skillreturn=()=>{
        let state=[];
        for(let i=0;i<skill;i++){
            state.push(
                 <Resumeinput/>
            );
        }
        return state;
    }
    const projectadd = () =>{
        let count = project;
            if((count<2)&&(count>0)){
                count++;
                setproject(count);
            }
    }
    const projectsub = () =>{
        let count = project;
        if((count<=2)&&(count>1)){
            count--;
            setproject(count);
        }
    }
    const projectreturn=()=>{
        let state=[];
        for(let i=0;i<project;i++){
            state.push(
                <Resumedetailswrapper2>
                   <Projectname><Projectdetails1>Project name</Projectdetails1><Projectinput1/></Projectname> 
                   <Projectwrapper><Projectdetails1>Details</Projectdetails1>
                   <Projectdetails2>Value</Projectdetails2></Projectwrapper>
                   <Projectwrapper><Projectinput2/><Projectinput3/></Projectwrapper>
                   <Projectwrapper><Projectinput2/><Projectinput3/></Projectwrapper>
                   <Projectwrapper><Projectinput2/><Projectinput3/></Projectwrapper>
                   <Projectwrapper><Projectinput2/><Projectinput3/></Projectwrapper>
                </Resumedetailswrapper2>
            );
        }
        return state;
    }
    const achievmentsadd = () =>{
        let count = achievments;
        console.log('vdbbv');
            if((count<4)&&(count>0)){
                count++;
                setachievments(count);
            }
    }
    const achievmentssub = () =>{
        let count = achievments;
        if((count<=4)&&(count>1)){
            count--;
            setachievments(count);
        }
    }
    const achievmentreturn = () =>{
        let state=[];
        for(let i=0;i<achievments;i++){
            state.push(
                 <Resumeinput/>
            );
        }
        return state;
    }   
    return(
            <Resumewrapper>
                <Navbar/>
                <Resumedetails>
                    <Resumeheading>Enter the details </Resumeheading>
                    <Resumedetailswrapper>
                        <Resumetype>Name</Resumetype><Resumeinput onBlur={(e)=>setarray({...array,name:e.target.value})}/>
                    </Resumedetailswrapper>
                    <Resumedetailswrapper>
                        <Resumetype>Profession</Resumetype><Resumeinput onBlur={(e)=>setarray({...array,profession:e.target.value})}/>
                    </Resumedetailswrapper>
                    <Resumedetailswrapper>
                        <Resumetype>details 1</Resumetype>
                        <Resumecontacts1 onBlur={(e)=>setarray({...array,details11:e.target.value})}/><Resumecontacts2 onBlur={(e)=>setarray({...array,details12:e.target.value})}/>
                    </Resumedetailswrapper>
                    <Resumedetailswrapper>
                        <Resumetype>details 2</Resumetype>
                        <Resumecontacts1 onBlur={(e)=>setarray({...array,details21:e.target.value})}/><Resumecontacts2 onBlur={(e)=>setarray({...array,details22:e.target.value})}/>
                    </Resumedetailswrapper>
                    <Resumedetailswrapper>
                        <Resumetype>details 3</Resumetype>
                        <Resumecontacts1 onBlur={(e)=>setarray({...array,details31:e.target.value})}/><Resumecontacts2 onBlur={(e)=>setarray({...array,details32:e.target.value})}/>
                    </Resumedetailswrapper>
                    <Resumedetailswrapper>
                        <Resumetype>details 4</Resumetype>
                        <Resumecontacts1 onBlur={(e)=>setarray({...array,details41:e.target.value})}/><Resumecontacts2 onBlur={(e)=>setarray({...array,details42:e.target.value})}/>
                    </Resumedetailswrapper>
                    <Resumedetailswrapper2>
                        <Resumetype>why you join this company?</Resumetype><Resumeinput onBlur={(e)=>setarray({...array,company:e.target.value})}/>
                    </Resumedetailswrapper2>
                    <Resumedetailswrapper2>
                          <Resumetype>Profile</Resumetype><Adder onClick={profileadd}><i class="fa fa-plus" aria-hidden="true"></i></Adder> 
                          <Subtract onClick={profilesub}><i class="fa fa-minus" aria-hidden="true"></i></Subtract>
                          {profile_return()}
                    </Resumedetailswrapper2>
                    <Resumedetailswrapper2>
                        <Resumetype>skills</Resumetype><Adder onClick={skilladd}><i class="fa fa-plus" aria-hidden="true"></i></Adder> 
                          <Subtract onClick={skillsub}><i class="fa fa-minus" aria-hidden="true"></i></Subtract>
                           {skillreturn()}
                    </Resumedetailswrapper2>
                    <Resumedetailswrapper2>
                         <Resumetype>Projects</Resumetype><Adder onClick={projectadd}><i class="fa fa-plus" aria-hidden="true"></i></Adder> 
                          <Subtract onClick={projectsub}><i class="fa fa-minus" aria-hidden="true"></i></Subtract>
                            {projectreturn()}
                    </Resumedetailswrapper2>
                    <Resumedetailswrapper2>
                        <Resumetype>Achievments</Resumetype><Adder onClick={achievmentsadd}><i class="fa fa-plus" aria-hidden="true"></i></Adder> 
                          <Subtract onClick={achievmentssub}><i class="fa fa-minus" aria-hidden="true"></i></Subtract>
                            {achievmentreturn()}
                    </Resumedetailswrapper2>
                </Resumedetails>
                <Resumepreview></Resumepreview>
            </Resumewrapper>
    );
}