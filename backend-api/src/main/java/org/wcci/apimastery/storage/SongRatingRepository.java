package org.wcci.apimastery.storage;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.resources.SongRating;

public interface SongRatingRepository extends CrudRepository<SongRating, Long> {
}
