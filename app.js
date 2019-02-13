var vue = new Vue({
    el: '#app',
    data: {
        tweets: [],
        tweet:"",
        author:"",
        message: "",
        idTweets: ""
    },


    methods: {

        addTweets: function() {
            this.$http.post('https://fake-tweets-api.herokuapp.com/tweets',{
                author:this.author,
                message:this.message,
            })
            .then(response => { console.log(response)})
            .catch(error => { console.log("Error!") })
        },


        getTweets: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets';
            this.$http.get(url).then(response => {
                this.tweets = response.body;
                return this.tweets;
            });
        },


        getTweetsByAuthor: function () {
            this.$http.get('https://fake-tweets-api.herokuapp.com/tweets?author=' + this.author, {
                author: this.author
            })
                .then(response => {
                    this.tweets = response.body;
                    console.log(response)
                })
                .catch(error => { console.log("Error!") })
        },


        getTweetsByWord: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets?word=' + this.message;
            this.$http.get(url).then(response => {
                this.tweets = response.body;
                return this.message;
            });
        },


        TweetsById: function() {
            console.log('this.idTweets:', this.idTweets);
            var url = 'https://fake-tweets-api.herokuapp.com/tweets/' + this.idTweets;
            this.$http.get(url).then(response => {
                this.tweets = [];
                this.tweets.push(response.body);
                console.log('this.tweet:', this.tweets);
                return this.tweets;
            })
            .catch(error => { console.log("Error!") })
        },


        deleteTweetsById: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets/' + this.idTweets;
            this.$http.delete(url).then(response => {
                this.getTweets();
            })
        }
    },

    created: function() {
        this.getTweets();
    }
})