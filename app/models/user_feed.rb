class UserFeed < ActiveRecord::Base
  attr_accessible :feed_id, :user_id

  validates :feed_id, :user_id, presence: true
  validates :feed_id, uniqueness: {scope: :user_id}

  belongs_to :user
  belongs_to :feed

end
