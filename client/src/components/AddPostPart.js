import React, { useState } from 'react'
import Axios from 'axios';import './AddPostPart.css';

function AddPostPart() {

  const [imageUrl,setImageUrl]=useState([]);
  const [subject,setSubject]=useState([]);
  const [like,setLike]=useState('0');
  const [dislike,setDislike]=useState('0');

  const addPostToDB=(event)=>{

        const a=document.getElementById('imageurlinaddpost');

        const b=document.getElementById('subjectinaddpost');

        if (a.value.length===0 || b.value.length===0) {
            alert('Please enter subject and ImageUrl');
        } else {
            Axios.post('http://localhost:3001/addPostToDB',{imageUrl:imageUrl,subject:subject,like:like,dislike:dislike});
            document.getElementById('forchangevalueinaddpost').value='Thank You';
            setTimeout(function(){
                document.getElementById('forchangevalueinaddpost').value='Sign Up';
            }, 1500);
            setTimeout(function(){
                window.location.reload();
            },1500)
            
        }

        

  }

  const tocloseaddpost=(event)=>{
        document.getElementById('toclosecatch').style.display='none';
        event.preventDefault();
  }

  const showaddpostpart=(event)=>{
    document.getElementById('toclosecatch').style.display='block';
    event.preventDefault();
  }

  return (

    <div>
        <div>

          <div>
            <input className='forshowaddpostpartbutton' type='submit' value='Add Post' onClick={showaddpostpart} />
          </div>

          <div id='toclosecatch' className='allofaddpostpart'>

            <form>

              <div >
                <input className='inputforaddpostpart' id='imageurlinaddpost' placeholder='Image Url' type='url' onChange={(event)=>setImageUrl(event.target.value)} />
              </div>

              <div>
                <input className='inputforaddpostpart' id='subjectinaddpost' placeholder='Subject' type='text' onChange={(event)=>setSubject(event.target.value)} />
              </div>

              <div>
                <input id='forchangevalueinaddpost' type='submit' value='Submit' onClick={addPostToDB} />
              </div>

              <div>
                <input className='forcloseaddpost' type='submit' value='X' onClick={tocloseaddpost}  />     
              </div>

            </form>

          </div>

          
        </div>
    </div>
  )
}

export default AddPostPart;