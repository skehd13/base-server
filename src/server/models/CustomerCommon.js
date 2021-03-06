const CustomerCommon = (sequelize, DataTypes) =>
  sequelize.define(
    "customerCommon",
    {
      id: {
        type: DataTypes.STRING(100),
        primaryKey: true
      },
      user_id: {
        type: DataTypes.STRING(16),
        allowNull: true
      },
      angel_id: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      bona_id: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      user_code: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      storeName: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      storeRegNumber: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      storePhone: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      storeAddress: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      storeLongitude: {
        type: DataTypes.FLOAT(),
        allowNull: true
      },
      storeLatitude: {
        type: DataTypes.FLOAT(),
        allowNull: true
      },
      storeOpeningDate: {
        type: DataTypes.DATE(),
        allowNull: true
      },
      saleOpeningDate: {
        type: DataTypes.DATE(),
        allowNull: true
      },
      registeredDate: {
        type: DataTypes.DATE(),
        allowNull: true
      },
      ceoName: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      ceoRegNumber: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      ceoPhone: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      deleteDate: {
        type: DataTypes.DATE(),
        allowNull: true
      },
      storeState: {
        type: DataTypes.STRING(2),
        allowNull: true
      },
      storeCategory: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      storeCategory2: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      randomCode: {
        type: DataTypes.STRING(5),
        allowNull: true
      }
    },
    {
      freezeTableName: true, //복수형 테이블명 해제
      timestamps: false //create_at, update_at 제거
    }
  );

export default CustomerCommon;
