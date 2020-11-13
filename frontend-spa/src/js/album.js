class AlbumRatings {
  constructor() {
    this._albumStars = 25;
    this._albumRatingCount = 5;
  }

  get albumStars() {
    return this._albumStars;
  }

  get ratingCount() {
    return this._albumRatingCount;
  }

  oneStarRating() {
    this._albumStars += 1;
    this._albumRatingCount++;
  }

  twoStarRating() {
    this._albumStars += 2;
    this._albumRatingCount++;
  }

  threeStarRating() {
    this._albumStars += 3;
    this._albumRatingCount++;
  }

  fourStarRating() {
    this._albumStars += 4;
    this._albumRatingCount++;
  }

  fiveStarRating() {
    this._albumStars += 5;
    this._albumRatingCount++;
  }

  averageAlbumRating() {
    let averageAlbumRating = this._albumStars / this._albumRatingCount;
    averageAlbumRating = Math.round(averageAlbumRating * 10) / 10;
    return averageAlbumRating;
  }
}

export {AlbumRatings};
