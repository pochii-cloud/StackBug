CREATE OR ALTER PROCEDURE insertOrUpdateAnswerVote
    @id VARCHAR(255),
    @vote INT,
    @created_at DATETIME,
    @updated_at DATETIME,
    @user_id VARCHAR(100),
    @answer_id VARCHAR(255)
AS
BEGIN
    IF EXISTS (
            SELECT *
            FROM ANSWER_VOTE
            WHERE user_id = @user_id
                AND answer_id = @answer_id
            )
    BEGIN
        UPDATE ANSWER_VOTE
        SET vote = @vote,
            created_at = @created_at,
            updated_at = @updated_at
        WHERE user_id = @user_id
            AND answer_id = @answer_id;

        SELECT *
        FROM ANSWER_VOTE
        WHERE user_id = @user_id
            AND answer_id = @answer_id;
    END
    ELSE
    BEGIN
        INSERT INTO ANSWER_VOTE (
            id,
            vote,
            user_id,
            answer_id,
            created_at,
            updated_at
            )
        VALUES (
            @id,
            @vote,
            @user_id,
            @answer_id,
            @created_at,
            @updated_at
            );

        SELECT *
        FROM ANSWER_VOTE
        WHERE user_id = @user_id
            AND answer_id = @answer_id;
    END
END;
