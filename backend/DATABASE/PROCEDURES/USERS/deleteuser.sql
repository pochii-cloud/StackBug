CREATE OR ALTER PROCEDURE deleteUser(
  @id VARCHAR (100)
  )
AS 
BEGIN
UPDATE USERDB 
SET is_deleted=1
    WHERE id=@id

END