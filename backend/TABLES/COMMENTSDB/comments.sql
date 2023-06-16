CREATE TABLE COMMENTS
(
    id VARCHAR ( 255 ) PRIMARY KEY ,
    comment VARCHAR ( 255 ) NOT NULL ,
    user_id VARCHAR ( 100 ) NOT NULL ,
    answer_id VARCHAR ( 255 ) NOT NULL ,
    is_deleted BIT DEFAULT  0 ,
	created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES USERDB(id),
    FOREIGN KEY (answer_id) REFERENCES answers(id),
    CONSTRAINT FK_comments_user_id_users_id FOREIGN KEY (user_id) REFERENCES USERDB(id) ON DELETE CASCADE,

);