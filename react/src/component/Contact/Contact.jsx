import { useState } from "react";
import { useMessages } from "../Hooks/useMessages"
import Header from "../layout/Header";
import { Container } from "@mui/system";
import { Button, Divider, Paper, Rating, TextField, Typography } from "@mui/material";

export default function Contact(){
    const {createMessage} = useMessages();
    const [newMessage , setNewMessage] = useState({
        name :"",
        email :"",
        message :"",
        rating:0
    })
    const handleSendMessage =()=>{
        createMessage(newMessage);
        setNewMessage({
            name :"",
        email :"",
        message :"",
        rating:0
        });
    };
    return<>
    <Header/>
    <Container sx={{my:"auto"}}>
        <Paper elevation={4} sx={{display:"flex", gap:3 , flexDirection:"column"}}>
            <Typography variant="h3">
                Leave your comment!
            </Typography>
            <Divider>Stay In Touch!</Divider>
            <TextField label="Name" required value={newMessage.name} onChange={(e) =>setNewMessage({...newMessage, email: e.target.value(newMessage)})}/>
            <TextField label="Email" value={newMessage.email} onChange={(e)=> setNewMessage({...newMessage, email: e.target.value(newMessage)})}/>    
            <TextField label="Message" minRows={"3"} multiline required value={newMessage.message} onChange={(e)=>setNewMessage({...newMessage, message:e.target.value(newMessage)})}/>
            <Typography>Leave your rating!</Typography>
            <Rating name="simple-controlled" value={newMessage.rating} onChange={(e)=> newMessage({...newMessage,rating: e.target.value(newMessage)})}/>
            <Button variant="contained" onClick={()=> handleSendMessage}>Send your message</Button>
        </Paper>

    </Container>

    
    
    
    </>
}