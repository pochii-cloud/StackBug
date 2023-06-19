CREATE OR ALTER PROCEDURE downvoteAnswer
    @answer_id VARCHAR(255)
AS
BEGIN
    IF EXISTS (SELECT * FROM ANSWER_VOTE WHERE answer_id = @answer_id)
    BEGIN
        -- Answer has existing votes, update the vote count
        UPDATE ANSWER_VOTE
        SET vote = vote - 1,
            updated_at = GETDATE()
        WHERE answer_id = @answer_id;
    END
    ELSE
    BEGIN
        -- Answer has no votes, insert a new downvote record with vote = -1
        INSERT INTO ANSWER_VOTE (id, vote, answer_id, created_at, updated_at)
        VALUES (NEWID(), -1, @answer_id, GETDATE(), GETDATE());
    END;
END;
