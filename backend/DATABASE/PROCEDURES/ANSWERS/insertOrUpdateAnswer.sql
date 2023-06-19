CREATE OR ALTER PROCEDURE insertAnswer
    @id VARCHAR(255),
    @answer VARCHAR(255),
    @created_at DATETIME,
    @user_id VARCHAR(255),
    @question_id VARCHAR(255)
AS
BEGIN
    -- Insert new answer with default values for vote and is_accepted
    INSERT INTO ANSWERS (id, answer, created_at, user_id, question_id)
    VALUES (@id, @answer, @created_at, @user_id, @question_id);

    SELECT * FROM ANSWERS WHERE id = @id;
END


