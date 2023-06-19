CREATE OR ALTER PROCEDURE GetQuestionsByAnswerCount
AS
BEGIN
    SELECT q.id, q.title, q.user_id, q.description, q.code, q.tags, q.views, q.is_deleted, q.created_at, q.updated_at, COUNT(a.id) AS answer_count
    FROM QUESTIONS q
    LEFT JOIN ANSWERS a ON q.id = a.question_id
    GROUP BY q.id, q.title, q.user_id, q.description, q.code, q.tags, q.views, q.is_deleted, q.created_at, q.updated_at
    ORDER BY answer_count DESC;
END


