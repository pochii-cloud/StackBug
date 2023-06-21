CREATE PROCEDURE DownvoteAnswer
    @answerId VARCHAR(255),
    @userId VARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    -- Check if the user has already downvoted the answer
    IF EXISTS (
        SELECT 1
        FROM ANSWER_VOTE
        WHERE answer_id = @answerId
          AND user_id = @userId
          AND downvote = 1
    )
    BEGIN
        -- User has already downvoted, cannot downvote again
        RETURN;
    END

    -- Update the downvote count and set downvote to 1
    UPDATE ANSWER_VOTE
    SET downvote = 1,
        votes = votes - 1,
        updated_at = GETDATE()
    WHERE answer_id = @answerId
      AND user_id = @userId;

    -- If no rows were affected, the user has not yet voted on the answer
    IF @@ROWCOUNT = 0
    BEGIN
        -- Insert a new row with downvote = 1
        INSERT INTO ANSWER_VOTE (id, downvote, answer_id, user_id, votes)
        VALUES (NEWID(), 1, @answerId, @userId, -1);
    END
END
