import React, { useState,useEffect } from 'react';
import './PostPartForProfilePage.css';
import Axios from 'axios';

function PostPartForProfilePage() {

    const [ınfos,setInfos]=useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/allPosts').then((response)=>{
          setInfos(response.data);
        }).catch(()=>{
          console.log('ERR')
        });
      },[]);

    
      const updatePost=(id)=>{
        const newSubject=prompt('Enter new subject: ');
    
        Axios.put('http://localhost:3001/update',{newSubject: newSubject,id:id}).then(()=>{
          setInfos(ınfos.map((val)=>{
            return val._id==id ? {_id:id,subject:newSubject,imageUrl:val.imageUrl,like:val.like,unlike:val.unlike} : val;
          }))
        })
      }


      const deletePost=(id)=>{
        Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>{
          setInfos(ınfos.filter((val)=>{
            return val._id != id;
          }))
        });
      }


  return (

    <div>

        <div className='allofpostpartinprofilepage'>

            {ınfos.map(ınfo=>(
                <div className='borderofpostinprofilepage' key={ınfo._id}>
                    <img className='imginpostinprofilepage' src={ınfo.imageUrl} alt='Image not found' />
                    <div className='subjectinpostinprofilepage'>{ınfo.subject}</div>
                    <button className='updatebuttoninprofilepage' onClick={()=>{updatePost(ınfo._id)}}>Update</button>
                    <button className='deletebuttoninprofilepage' onClick={()=>{deletePost(ınfo._id)}}>Delete</button>
                </div>
            ))}

        </div>

    </div>
  )
}

export default PostPartForProfilePage;