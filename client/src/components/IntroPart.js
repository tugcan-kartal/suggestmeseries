import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import './IntroPart.css';
import logo from './suggest.png';

function IntroPart() {

    const [email,setEmail]=useState([]);
    const [username,setUsername]=useState([]);
    const [password,setPassword]=useState([]);

    const [signinUsername,setsigninUsername]=useState([]);
    const [signinPassword,setsigninPassword]=useState([]);
    const [infos,setInfos]=useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/allUsers').then((response)=>{
          setInfos(response.data);
        }).catch(()=>{
          console.log('ERR')
        });
      },[]);

    const signinToDB=(event)=>{

        const x=document.getElementById('usernameinsignin');

        const y=document.getElementById('passwordinsignin');

        if (x.value.length===0 || y.value.length===0) {
            alert('Please enter username and password')
        } else {

            for(let i of infos){

                if(i.username===signinUsername && i.password===signinPassword){
                    document.getElementById('signinpartforbutton').value='Thank You';
                    setTimeout(function(){
                        window.location.href = '/loading-page';
                    },2000);
                    break;
                }else{
                    setTimeout(function(){
                        document.getElementById('signinpartforbutton').value='Not Found';
                    },2500);
                }

                setTimeout(function(){
                    document.getElementById('signinpartforbutton').value='Sign In';
                },3000);

            }

        }

        event.preventDefault();
    }

    const addSignUpToDB=(event)=>{

        const a=document.getElementById('emailinsignup');

        const b=document.getElementById('usernameinsignup');

        const c=document.getElementById('passwordinsignup');

        if (a.value.length===0 || b.value.length===0 || c.value.length===0) {
            alert('Please enter email,username and password');
        } else {
            Axios.post('http://localhost:3001/addSignUpToDB',{email:email,username:username,password:password});
            document.getElementById('forintsignuptochangevalue').value='Thank You';
            setTimeout(function(){
                document.getElementById('forintsignuptochangevalue').value='Sign Up';
            }, 1500);
            setTimeout(function(){
                window.location.reload();
            },1500)
            
        }
    }

    const showSignUp=(event)=>{
        document.getElementById('toshowforfignup').style.display='block';
        document.getElementById('leftpartint').style.opacity='0.3';
        document.getElementById('rightpartint').style.opacity='0.3';
        event.preventDefault();
    }

    const closeSignUpInInt=(event)=>{
        document.getElementById('toshowforfignup').style.display='none';
        document.getElementById('leftpartint').style.opacity='1';
        document.getElementById('rightpartint').style.opacity='1';
        event.preventDefault();
    }

  return (
    <div>
        <div className='allofıntropart'>

            <div id='leftpartint' className='leftpartinintro'>
                <div>
                    <img className='forLogo' src={logo} alt='not found' />
                </div>
                <div className='introwrite'>SuggestMe gives you advice from someones who wants to help you and everyone will be anonymous include you.</div>
            </div>


            <div id='rightpartint' className='rightpartinintro'>

                <form>
                    <div>
                        <input id='usernameinsignin' className='inputinintropart' type='text' placeholder='Username' onChange={(event)=>{setsigninUsername(event.target.value)}} required /> 
                    </div>
                    
                    <div>
                        <input id='passwordinsignin' className='inputinintropart' type='password' placeholder='Password' onChange={(event)=>{setsigninPassword(event.target.value)}} required /> 
                    </div>
                    
                    <div>
                        <input id='signinpartforbutton' className='buttoninintropart firstbuttonintropart' type='submit' value='Sign In' onClick={signinToDB} />
                    </div>

                    <div>
                        <input className='buttoninintropart secondbuttonintropart' type='submit' value='Sign Up' onClick={showSignUp} />     
                    </div>
                </form>

            </div>


            <div id='toshowforfignup' className='signuppartinintropart'>

                <form>

                    <div>
                        <input id='emailinsignup' className='inputinintropart' type='email' placeholder='Email address' onChange={(event)=>setEmail(event.target.value)} required />
                    </div>

                    <div>
                        <input id='usernameinsignup' className='inputinintropart' type='text' placeholder='Username' onChange={(event)=>setUsername(event.target.value)} required />
                    </div>
                    
                    <div>
                        <input id='passwordinsignup' className='inputinintropart' type='password' placeholder='Password' onChange={(event)=>setPassword(event.target.value)} required />
                    </div>

                    <div>
                        <input id='forintsignuptochangevalue'  className='buttoninintropart secondbuttonintropart buttoninintropartforsignup' type='submit' value='Sign Up' onClick={addSignUpToDB} />       
                    </div>

                    <div>
                        <input className='forclosesignup' type='submit' value='X' onClick={closeSignUpInInt} />     
                    </div>

                </form>

            </div>
            

        </div>
    </div>
  )
}
 
export default IntroPart;