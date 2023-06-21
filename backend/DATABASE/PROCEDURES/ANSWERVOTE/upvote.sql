CREATE OR ALTER PROCEDURE UpvoteAnswer
    @answerId VARCHAR(255),
    @userId VARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    -- Check if the user has already upvoted
    DECLARE @hasUpvoted BIT;
    SET @hasUpvoted = (SELECT upvote FROM ANSWER_VOTE WHERE answer_id = @answerId AND user_id = @userId);

    IF (@hasUpvoted = 0)
    BEGIN
        -- Increase votes by one and set upvote to 1
        UPDATE ANSWER_VOTE
        SET upvote = 1,
            votes = votes + 1,
            updated_at = GETDATE()
        WHERE answer_id = @answerId AND user_id = @userId;

        SELECT 'Upvote successful.' AS Result;
    END
    ELSE
    BEGIN
        -- User has already upvoted
        SELECT 'User has already upvoted.' AS Result;
    END
END;