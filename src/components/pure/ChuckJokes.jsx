import React, { useState } from 'react';
import { Joke } from '../../models/joke.class';
import { getRandomJoke } from '../../services/chuckService';
import { Avatar, Card, Button, Box, Typography } from '@mui/material';

const ChuckJokes = () => {
    const [jokes, setJokes] = useState([])

    const addJoke = () => {
        getRandomJoke()
            .then(res => {
                console.log(`New joke: `, res)
                setJokes([...jokes, new Joke(res)])
            })
            .catch(err => {
                console.log(`Error adding new joke: `,err)
            })
            .finally(() => {
                console.log(`Ended adding new joke`)
            })
    }

    const likeJoke = (id) => {
        let cJokes = jokes

        let index = cJokes.findIndex(j => j.id === id)
        cJokes[index].like = !cJokes[index].like
        cJokes[index].dislike = false

        setJokes([...cJokes])
    }

    const dislikeJoke = (id) => {
        let cJokes = jokes

        let index = cJokes.findIndex(j => j.id === id)
        cJokes[index].like = false
        cJokes[index].dislike = !cJokes[index].dislike

        setJokes([...cJokes])
    }

    return (
        <div>
            <Box
                sx={{ maxWidth: '400px', margin: '10px', display: 'flex', alignItems: 'center' }}
            >
                <Box sx={{margin: '10px'}}>
                    <Button onClick={addJoke}>Add New Joke</Button>
                </Box>
                <Box sx={{margin: '10px'}}>
                    <Typography>Total Likes: {jokes.filter(j => j.like === true).length}</Typography>
                    <Typography>Total Disikes: {jokes.filter(j => j.dislike === true).length}</Typography>
                </Box>
            </Box>
            {jokes.map((joke, index) => 
                <Card 
                    key={index}
                    variant='outlined'
                    sx={{ 
                        border: '1px solid #09f',
                        maxWidth: '400px', 
                        margin: '10px', 
                        padding: '10px', 
                        display: 'flex', 
                        alignItems: 'center' 
                    }}
                >
                    <Avatar alt='joke-image' sx={{ margin: '20px', bgcolor: '#09f' }}>{joke.value[0]}</Avatar>
                    <Box>
                        <Box>{joke.value}</Box>
                        <Box>
                            <Button 
                                variant={joke.like ? 'contained' : 'outlined'} 
                                sx={{ margin:'5px' }}
                                onClick={() => likeJoke(joke.id)}
                            >Like</Button>
                            <Button 
                                variant={joke.dislike ? 'contained' : 'outlined'} 
                                sx={{ margin:'5px' }}
                                onClick={() => dislikeJoke(joke.id)}
                            >Dislike</Button>
                        </Box>
                    </Box>
                </Card>
            )}
        </div>
    );
}

export default ChuckJokes;
