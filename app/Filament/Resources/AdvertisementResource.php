<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AdvertisementResource\Pages;
use App\Filament\Resources\AdvertisementResource\RelationManagers;
use App\Models\Advertisement;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AdvertisementResource extends Resource
{
    protected static ?string $model = Advertisement::class;

    protected static ?string $navigationIcon = 'heroicon-o-currency-dollar';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make()->schema([
                    Forms\Components\Section::make("Advertisement Data")->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('type')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('redirect_url')
                            ->maxLength(255),
                        Forms\Components\TextInput::make('max_impressions')
                            ->numeric(),
                        Forms\Components\TextInput::make('max_views_per_user')
                            ->numeric(),
                    ])->columns(['sm' => 2])->columnSpan(2),
                    Forms\Components\Section::make("Advertiser Detail")->schema([
                        Forms\Components\TextInput::make('advertiser_name')
                            ->maxLength(255),
                        Forms\Components\TextInput::make('advertiser_email')
                            ->email()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('advertiser_phone')
                            ->tel()
                            ->maxLength(255),
                    ])->columns(2),
                    Forms\Components\Section::make("Advertisement Detail")->schema([
                        Forms\Components\Placeholder::make("Clicks")
                            ->content(fn(?Advertisement $record): string => $record ?  $record->clicks : "-"),
                        Forms\Components\Placeholder::make("Impression")
                            ->content(fn(?Advertisement $record): string => $record ?  $record->impresion : "-"),
                        Forms\Components\Placeholder::make("Dimension")
                            ->content(fn(?Advertisement $record): string => $record ?  $record->dimension : "-"),
                    ])->columns(2)
                ])->columns(['sm' => 2])->columnSpan(2),
                Forms\Components\Grid::make()->schema([
                    Forms\Components\Section::make()->schema([
                        Forms\Components\Placeholder::make("created at")
                            ->content(fn(?Advertisement $record): string => $record ?  $record->created_at->diffForHumans() : "-"),
                        Forms\Components\Placeholder::make("updated at")
                            ->content(fn(?Advertisement $record): string => $record ?  $record->updated_at->diffForHumans() : "-")
                    ]),
                    Forms\Components\Section::make()->schema([
                        CuratorPicker::make("media_path")
                            ->required(),
                        Forms\Components\DatePicker::make('start_date'),
                        Forms\Components\DatePicker::make('end_date'),
                        Forms\Components\Select::make('status')
                            ->options(['active' => "Active", 'inactive' => "Inactive", 'pending' => "Pending"])
                            ->required(),
                        Forms\Components\Select::make('priority')
                            ->options([
                                1 => "High",
                                2 => "Important",
                                3 => "Normal",
                                4 => "Low",
                                5 => "Optional",
                            ])
                            ->required(),
                        Forms\Components\Select::make('location')
                            ->options([
                                "header" => "Header : 1600x600",
                                "right_side" => "Right Side : 300x600",
                                "left_side" => "Left Side : 300x600",
                                "bottom" => "Bottom : 728x90",
                            ])
                            ->required(),
                    ]),
                ])->columnSpan(1)
            ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('type')
                    ->searchable(),
                Tables\Columns\TextColumn::make('media_path')
                    ->searchable(),
                Tables\Columns\TextColumn::make('redirect_url')
                    ->searchable(),
                Tables\Columns\TextColumn::make('location')
                    ->searchable(),
                Tables\Columns\TextColumn::make('dimensions')
                    ->searchable(),
                Tables\Columns\TextColumn::make('priority')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('start_date')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('end_date')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('max_impressions')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('max_views_per_user')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('clicks')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('impressions')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('advertiser_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('advertiser_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('advertiser_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('status'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAdvertisements::route('/'),
            'create' => Pages\CreateAdvertisement::route('/create'),
            'edit' => Pages\EditAdvertisement::route('/{record}/edit'),
        ];
    }
}
