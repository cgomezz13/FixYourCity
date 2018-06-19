class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render "api/comments/show"
        else
            error = @comment.errors.full_messages
            render json: error, status: 401
        end
    end

    def index
        @comments = Incident.find(params[:incident_id]).comments
        render "api/comments/index"
    end

    def destroy
      @comment = Incident.find(params[:incident_id].to_i).comments.find(params[:comment_id].to_i)
      @comment.destroy!
      render 'api/comments/show'
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :title, :user_id, :incident_id)
    end
end
