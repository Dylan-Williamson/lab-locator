class StudioShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :website, :image_url, :hourly_rate, :location
  has_many :reviews
end
