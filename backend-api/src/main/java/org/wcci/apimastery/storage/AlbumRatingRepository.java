package org.wcci.apimastery.storage;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.resources.AlbumRating;

public interface AlbumRatingRepository extends CrudRepository<AlbumRating, Long> {
}
