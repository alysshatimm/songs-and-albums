package org.wcci.apimastery.storage;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.resources.SongComment;

public interface SongCommentRepository extends CrudRepository<SongComment, Long> {

    Iterable<SongComment> findAllById(Long id);
}
