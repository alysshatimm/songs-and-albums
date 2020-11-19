class SongRatings {
    constructor() {
        this._songStars = 0;
        this._songRatingCount = 0;
    }

    get albumStars() {
        return this._songStars;
    }

    get ratingCount() {
        return this._songRatingCount;
    }

    oneStarRating() {
        this._songStars += 1;
        this._songRatingCount++;
    }

    twoStarRating() {
        this._songStars += 2;
        this._songRatingCount++;
    }

    threeStarRating() {
        this._songStars += 3;
        this._songRatingCount++;
    }

    fourStarRating() {
        this._songStars += 4;
        this._songRatingCount++;
    }

    fiveStarRating() {
        this._songStars += 5;
        this._songRatingCount++;
    }

    averageSongRating() {
        let averageSongRating = this._songStars / this._songRatingCount;
        averageSongRating = Math.round(averageSongRating * 10) / 10;
        return averageSongRating;
    }
}


export { SongRatings };