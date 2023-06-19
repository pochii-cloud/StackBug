CREATE OR ALTER PROCEDURE upvoteAnswer
    @answer_id VARCHAR(255)
AS
BEGIN
    IF EXISTS (SELECT 1 FROM ANSWER_VOTE WHERE answer_id = @answer_id)
    BEGIN
        UPDATE ANSWER_VOTE
        SET vote = vote + 1,
            updated_at = GETDATE()
        WHERE answer_id = @answer_id;
    END
    ELSE
    BEGIN
        -- Insert a new row with initial vote count
        INSERT INTO ANSWER_VOTE (id, vote, answer_id, created_at, updated_at)
        VALUES (NEWID(), 1, @answer_id, GETDATE(), GETDATE());
    END;
END;


