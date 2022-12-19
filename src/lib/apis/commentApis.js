import { axiosPrivate } from './customAxios';

//댓글 리스트 API
export const getCommentList = async (post_id) => {
	const reqPath = `/post/${post_id}/comments`;

	const res = await axiosPrivate.get(reqPath);
	return res;
};

//댓글 작성 API
export const postComment = async (post_id, commentContent) => {
	const reqPath = `/post/${post_id}/${commentContent}`;

	const res = await axiosPrivate.post(reqPath, commentContent);
	return res;
};

//댓글 삭제 API

export const deleteComment = async (post_id, commentContent, comment_id) => {
	const reqPath = `/post/${post_id}/${commentContent}/:${comment_id}`;

	const res = await axiosPrivate.post(reqPath, commentContent);
	return res;
};

//댓글 신고 API

export const reportComment = async (post_id, commentContent, comment_id) => {
	const reqPath = `/post/${post_id}/${commentContent}/:${comment_id}/report`;

	const res = await axiosPrivate.post(reqPath, commentContent);
	return res;
};
