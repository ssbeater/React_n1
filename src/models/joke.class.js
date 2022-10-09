export class Joke {
    categories= []
    created_at= ''
    icon_url= ''
    id= '' 
    updated_at= ''
    url= ''
    value= ''
    like = false
    dislike = false

    constructor(newJoke){
        this.categories= newJoke.categories
        this.created_at= newJoke.created_at
        this.icon_url= newJoke.icon_url
        this.id= newJoke.id
        this.updated_at= newJoke.updated_at
        this.url= newJoke.url
        this.value= newJoke.value
    }
}