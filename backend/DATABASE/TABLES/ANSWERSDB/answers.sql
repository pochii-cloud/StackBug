CREATE TABLE ANSWERS
(
    id VARCHAR ( 255 ) PRIMARY KEY ,
    answer VARCHAR ( 255 ) NOT NULL ,
    user_id VARCHAR ( 100 ) NOT NULL ,
    question_id VARCHAR ( 255 ) NOT NULL ,
    is_accepted BIT DEFAULT  0 ,
	created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES USERDB(id),
    FOREIGN KEY (question_id) REFERENCES questions(id),
    CONSTRAINT FK_answers_user_id_users_id FOREIGN KEY (user_id) REFERENCES USERDB(id) ON DELETE CASCADE,
    
);

ALTER TABLE ANSWERS
DROP CONSTRAINT IF EXISTS FK_answers_question_id_questions_id; -- Drop existing foreign key constraint if it exists

ALTER TABLE ANSWERS
ADD CONSTRAINT FK_answers_question_id_questions_id
FOREIGN KEY (question_id)
REFERENCES questions(id)
ON DELETE CASCADE;
