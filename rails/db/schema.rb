# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_13_074429) do

  create_table "order_details", charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "product_id"
    t.bigint "order_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["order_id"], name: "index_order_details_on_order_id"
    t.index ["product_id"], name: "index_order_details_on_product_id"
  end

  create_table "orders", charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "supplier_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["supplier_id"], name: "index_orders_on_supplier_id"
  end

  create_table "products", charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "supplier_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "discarded_at", precision: 6
    t.index ["discarded_at"], name: "index_products_on_discarded_at"
    t.index ["supplier_id"], name: "index_products_on_supplier_id"
  end

  create_table "suppliers", charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "discarded_at", precision: 6
    t.index ["discarded_at"], name: "index_suppliers_on_discarded_at"
  end

  add_foreign_key "order_details", "orders"
  add_foreign_key "order_details", "products"
  add_foreign_key "orders", "suppliers"
  add_foreign_key "products", "suppliers"
end
