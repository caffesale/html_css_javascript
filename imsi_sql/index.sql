-- select : table을 선택한다.
select * from users

-- where : 조건문 
-- 숫자값은 그냥 / 문자열은 작은 따옴표
select * from users
where point = 500
where name = '박**'

-- where + like : 문자열 중 일부를 '포함한'

select * from users
where email like '%gmail.com'

-- group by : 분류기준. 다만 count 등을 추출하지 않으면 각 분류의 대표값만 표시함
select * from users
group by user_id

-- order by : 정렬기준. 기본은 오름차순 (asc), desc는 내림차순. 

select user_id, count(*) from users
order by count(*)


-- join : inner join이 교집합, left join 합집합

select u.user_id, u.name, u.email from users u
inner join orders o
on u.user_id = o.user_id
where payment_method = 'kakaopay'

-- subquery : query 속의 query

select user_id, name, email from users
where user_id in (
	select user_id from orders
	where payment_method = 'kakopay'
)
