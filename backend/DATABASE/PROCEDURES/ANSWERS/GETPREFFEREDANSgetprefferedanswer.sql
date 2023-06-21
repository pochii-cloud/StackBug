CREATE OR ALTER PROCEDURE SetAnswerAsAccepted
    @answerId VARCHAR(255)
AS
BEGIN
    UPDATE ANSWERS
    SET is_accepted = 1
    WHERE id = @answerId;
END;