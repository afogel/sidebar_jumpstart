module TailwindHelper
  def tailwind_class_for(flash_type)
    {
      success: "bg-green-100 border-green-700 text-green-700 hover:bg-green-200",
      error: "bg-red-100 border-red-700 text-red-700 hover:bg-red-200",
      alert: "bg-yellow-100 border-yellow-700 text-yellow-700 hover:bg-yellow-200",
      notice: "bg-primary-100 border-primary-700 text-base-content-700 hover:bg-primary-200"
    }.stringify_keys[flash_type.to_s] || flash_type.to_s
  end
end
