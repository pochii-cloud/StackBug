CREATE OR ALTER PROCEDURE insertComment
    @id VARCHAR(255),
    @comment VARCHAR(255),
    @user_id VARCHAR(100),
    @answer_id VARCHAR(255)
AS
BEGIN
    -- Insert new comment
    INSERT INTO COMMENTS (id, comment, user_id, answer_id)
    VALUES (@id, @comment, @user_id, @answer_id);

    SELECT * FROM COMMENTS WHERE id = @id;
END
