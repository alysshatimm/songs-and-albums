package org.wcci.apimastery.storage;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.resources.AlbumComment;

public interface AlbumCommentRepository extends CrudRepository<AlbumComment, Long> {
}
