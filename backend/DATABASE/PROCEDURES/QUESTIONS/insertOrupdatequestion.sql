CREATE OR ALTER PROCEDURE insertQuestion
    @id VARCHAR(255),
    @title VARCHAR(255),
    @user_id VARCHAR(100),
    @description VARCHAR(255),
    @code VARCHAR(255),
    @tags VARCHAR(255)
AS
BEGIN
    INSERT INTO QUESTIONS (id, title, user_id, description, code, tags, views, is_deleted, created_at, updated_at)
    VALUES (@id, @title, @user_id, @description, @code, @tags, 0, 0, GETDATE(), GETDATE());
END;


CREATE OR ALTER PROCEDURE UpdateQuestion
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description VARCHAR(255),
    @code VARCHAR(255),
    @tags VARCHAR(255)
AS
BEGIN
    UPDATE QUESTIONS
    SET title = @title,
        description = @description,
        code = @code,
        tags = @tags,
        updated_at = GETDATE()
    WHERE id = @id;
END;
