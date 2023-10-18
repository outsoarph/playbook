# Class Typed Properties

It is recommended to use type hints for properties whenever possible instead of relying solely on docblocks.

## OK

```php
class PunchRecordRepository
{
    /**
     * @var null|string[] Validation errors
     */
    public $errors;

    /**
     * @var Record|null Data array
     */
    public $data;

    /**
     * @var Record Model instance
     */
    private $model;

    /**
     * @var CreateJournal Action instance
     */
    private $action;

    /**
     * @var \Illuminate\Validation\Validator|null Validator instance
     */
    public $validator;
}

```

## NOT OK

```php
class PunchRecordRepository
{
    public $errors = null;

    public ?array $data;

    private Record $model;

    private CreateJournal $action;

    public ?\Illuminate\Validation\Validator $validator;

}

```
